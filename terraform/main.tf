provider "google" {
    credentials = file("~/.ssh/petabytepeddler-42d63dcc685b.json")
    project = var.project_name
    region = var.region
    zone = var.region_zone_a
}