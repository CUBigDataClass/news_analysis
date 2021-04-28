resource "google_compute_network" "elastic-network" {
  name = "${var.project_name}-elastic-vpc"
}

resource "google_compute_address" "internal_endpoint" {
  name         = "primary-internal"
  address_type = "INTERNAL"
  address      = var.internal_kafka_ip
  purpose      = "GCE_ENDPOINT"
}