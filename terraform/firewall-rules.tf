resource "google_compute_firewall" "allow-all-internal" {
  name = "allow-all-internal"
  network = google_compute_network.elastic-network.name
  allow {
    protocol = "tcp"
  }
  allow {
    protocol = "udp"
  }
  allow {
    protocol = "icmp"
  }
  source_ranges = ["10.128.0.0/20"] // your subnet IP range
}

resource "google_compute_firewall" "allow-internal-lb" {
  name = "allow-internal-lb"
  network = google_compute_network.elastic-network.name
  allow {
    protocol = "tcp"
    ports = var.ports_to_open
  }
  source_ranges = ["10.128.0.0/20"] // your subnet IP range
  target_tags = var.network_tags
}

resource "google_compute_firewall" "ssh-rule" {
  name = "allow-ssh"
  network = google_compute_network.elastic-network.name
  allow {
    protocol = "tcp"
    ports = ["22"]
  }
  source_ranges = ["0.0.0.0/0"]
}