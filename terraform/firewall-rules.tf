resource "google_compute_firewall" "ssh-rule" {
  name = "allow-ssh"
  network = google_compute_network.elastic-network.name
  allow {
    protocol = "tcp"
    ports = ["22"]
  }
  target_tags = ["total-news-elasticsearch"]

  source_ranges = ["198.11.30.78", "174.16.200.128"] 
  # ["198.11.30.78", "174.16.200.128"]
}

# resource "google_compute_firewall" "team-rule" {
#   name = "allow-team-rule"
#   network = google_compute_network.elastic-network.name
#   allow {
#     protocol = "tcp"
#     ports = var.ports_to_open
#   }
#   target_tags = ["total-news-elasticsearch"]
#   source_ranges = ["0.0.0.0/0"]
#   # ["198.11.30.78", "174.16.200.128"]
# }
