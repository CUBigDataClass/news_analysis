resource "google_compute_instance" "elastic-instance-1" {
  name = "elastic-instance-1"
  machine_type = var.machine_type
  zone = var.region_zone_a
  allow_stopping_for_update = true
  tags = var.network_tags
  boot_disk {
    initialize_params {
    image = var.gce_image
    size = 130
    type = "pd-ssd"
    }
  }
  network_interface {
    network = "default"

    access_config {
      nat_ip = "34.70.33.196"
    }
  }
  service_account {
    scopes = var.machine_access_scopes
  }

  metadata = {
    ssh-keys = "tile9389:${file("~/.ssh/id_rsa.pub")}"
  }
  connection {
    type = "ssh"
    host = "34.70.33.196"
    user = "tile9389"
    private_key = file("~/.ssh/id_rsa")
  }
  provisioner "file" {
    source      = "../pipeline/startup.sh"
    destination = "/tmp/startup.sh"
  }
  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/startup.sh",
      "sudo sh /tmp/startup.sh"
    ]
  }
}