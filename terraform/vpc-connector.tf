resource "google_vpc_access_connector" "elastic-connector" {
  project = var.project_name
  name = "vpc-elastic-connector"
  provider = google-beta
  region = var.region
  ip_cidr_range = "10.8.0.0/28"
  network = "${var.project_name}-elastic-vpc"
  min_throughput = "200"
  max_throughput = "800"
}