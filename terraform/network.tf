resource "google_compute_network" "elastic-network" {
  name = "${var.project_name}-elastic-vpc"
}