resource "google_compute_network" "elastic-network" {
  name = "${var.project_name}-elastic-vpc"
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "elastic-subnet" {
  name = "elastic-subnet"
  ip_cidr_range = "10.128.0.0/20"
  network = google_compute_network.elastic-network.self_link
  region = var.region
  private_ip_google_access = true
  log_config {
    aggregation_interval = "INTERVAL_10_MIN"
    flow_sampling = 0.5
    metadata = "INCLUDE_ALL_METADATA"
  }
}