resource "google_compute_instance" "elastic-instance-1" {
  name = "elastic-instance-1"
  machine_type = var.machine_type
  zone = var.region_zone_a
  allow_stopping_for_update = true
  tags = var.network_tags
  boot_disk {
    initialize_params {
    image = var.es_webapp_image
    size = 130
    type = "pd-ssd"
    }
  }
  network_interface {
    subnetwork = google_compute_subnetwork.elastic-subnet.self_link
    network_ip = var.node_ips[0]
  }
  service_account {
    scopes = var.machine_access_scopes
  }
  # metadata_startup_script = file("startup.sh")
}

resource "google_compute_instance" "elastic-instance-2" {
  name = "elastic-instance-2"
  machine_type = var.machine_type
  zone = var.region_zone_a
  allow_stopping_for_update = true
  tags = var.network_tags
  boot_disk {
    initialize_params {
    image = var.gce_image
    size = 100
    type = "pd-ssd"
    }
  }
  network_interface {
    subnetwork = google_compute_subnetwork.elastic-subnet.self_link
    network_ip = var.node_ips[1]
  }
  service_account {
    scopes = var.machine_access_scopes
  }
}

resource "google_compute_instance" "elastic-instance-3" {
  name = "elastic-instance-3"
  machine_type = var.machine_type
  zone = var.region_zone_b
  allow_stopping_for_update = true
  tags = var.network_tags
  boot_disk {
    initialize_params {
    image = var.gce_image
    size = 100
    type = "pd-ssd"
    }
  }
  network_interface {
    subnetwork = google_compute_subnetwork.elastic-subnet.self_link
    network_ip = var.node_ips[2]
  }
  service_account {
    scopes = var.machine_access_scopes
  }
  # metadata_startup_script = templatefile("./startup.sh", {})
}