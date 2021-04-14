resource "google_compute_instance_group" "us-elastic-ig-zone-a" {
  name = "us-elastic-ig-zone-a"
  network = google_compute_network.my-elastic-network.self_link
  instances = [
  google_compute_instance.my-elastic-instance-1.self_link,
  google_compute_instance.my-elastic-instance-2.self_link,]
  zone = var.region_zone_a
}

resource "google_compute_instance_group" "us-elastic-ig-zone-b" {
  name = "us-elastic-ig-zone-b"
  network = google_compute_network.my-elastic-network.self_link
  instances = [
  google_compute_instance.my-elastic-instance-3.self_link]
  zone = var.region_zone_b
}

resource "google_compute_instance_group" "us-kibana-ig-zone-a" {
  name = "us-kibana-ig-zone-a"
  network = google_compute_network.my-elastic-network.self_link
  instances = [google_compute_instance.my-elastic-kibana.self_link]
  named_port {
    name = "kibana"
    port = 8080
  }
  zone = var.region_zone_a
}