#!/bin/bash
################################
#                              #
#  Install necessary packages  #
#                              #
################################

sudo apt-get update && sudo apt-get -y install wget zip tar git
# install java
sudo apt-get -y install default-jdk
#install python
sudo apt-get install -y python3 python3-pip

sudo sysctl vm.swappiness=1
echo 'vm.swappiness=1' | sudo tee --append /etc.sysctl.conf
wget https://mirrors.ocf.berkeley.edu/apache/kafka/2.7.0/kafka_2.13-2.7.0.tgz
tar -xzf kafka_2.13-2.7.0.tgz
rm kafka_2.13-2.7.0.tgz
