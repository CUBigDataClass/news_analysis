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
      nat_ip = "35.222.135.138"
    }
  }
  service_account {
    scopes = var.machine_access_scopes
  }
  # metadata_startup_script = file("startup.sh")

  metadata = {
    ssh-keys = "tile9389:${file("~/.ssh/id_rsa.pub")}"
  }
  connection {
    type = "ssh"
    host = "35.222.135.138"
    user = "tile9389"
    private_key = file("~/.ssh/id_rsa")
  }
  provisioner "file" {
    source      = "../pipeline/"
    destination = "/tmp"
  }
  provisioner "remote-exec" {
    inline = [
      "ls /tmp",
      "cd /tmp",
      "sudo sh ./startup.sh"
    ]
  }
}