resource "google_compute_instance_group" "us-elastic-ig-zone-a" {
  name = "us-elastic-ig-zone-a"
  network = google_compute_network.elastic-network.self_link
  instances = [
  google_compute_instance.elastic-instance-1.self_link,
  google_compute_instance.elastic-instance-2.self_link,]
  zone = var.region_zone_a
}

resource "google_compute_instance_group" "us-elastic-ig-zone-b" {
  name = "us-elastic-ig-zone-b"
  network = google_compute_network.elastic-network.self_link
  instances = [
  google_compute_instance.elastic-instance-3.self_link]
  zone = var.region_zone_b
}