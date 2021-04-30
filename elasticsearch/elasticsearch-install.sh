#!/bin/bash

################################
#                              #
#  Install necessary packages  #
#                              #
################################

#need to set up JAVA_HOME

sudo apt-get update && sudo apt-get -y install wget zip tar git
sudo apt-get -y install default-jdk
sudo apt-get install -y python3 python3-pip

wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.12.0-linux-x86_64.tar.gz
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.12.0-linux-x86_64.tar.gz.sha512

shasum -a 512 -c elasticsearch-7.12.0-linux-x86_64.tar.gz.sha512
tar -xzf elasticsearch-7.12.0-linux-x86_64.tar.gz

sudo sed -i "s+#network.host: 192.168.0.1+network.host: 0.0.0.0+g" elasticsearch-7.12.0/config/elasticsearch.yml
sudo sed -i "s+#discovery.seed_hosts: \[\"host1\", \"host2\"\]+discovery.seed_hosts: []+g" elasticsearch-7.12.0/config/elasticsearch.yml
