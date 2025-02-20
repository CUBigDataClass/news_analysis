# install docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# install docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
#Apply executable permissions to the binary
sudo chmod +x /usr/local/bin/docker-compose

# install logstash START ------------------------

#java is a prereq
sudo apt -y install default-jre
sudo apt -y install default-jdk

#install yum
sudo apt-get -y install yum

wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -

sudo apt-get -y install apt-transport-https

# Save the repository definition to /etc/apt/sources.list.d/elastic-7.x.list:
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list

# Download and install the public signing key:
sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch

sudo apt-get -y update && sudo apt-get -y install logstash

sudo mkdir /etc/yum.repos.d
sudo cp ./pipeline/logstash.repo /etc/yum.repos.d/

sudo yum -y install logstash
# install logstash END ---------------------------

# copy repo conf file for kafka pipeline
# sudo mkdir /etc/logstash
sudo cp ./pipeline/kafka-elastic-pipeline.conf /etc/logstash/conf.d/

# install python START ----------------------------
sudo apt -y install wget build-essential libreadline-gplv2-dev libncursesw5-dev \

wget https://www.python.org/ftp/python/3.9.1/Python-3.9.1.tgz

tar xzf Python-3.9.1.tgz

cd Python-3.9.1

./configure --enable-optimizations

make -j 2

sudo make alt install
# install python END ----------------------------

#clone project code
sudo apt-get install -y git
cd /tmp
git clone https://github.com/CUBigDataClass/news_analysis.git
cd news_analysis

# docker-composes
sudo docker-compose -f ./pipeline/docker-compose.yml build
sudo docker-compose -f ./pipeline/docker-compose.yml up -d

#install pip
curl https://bootstrap.pypa.io/pip/2.7/get-pip.py -o get-pip.py

sudo python get-pip.py

pip install tweepy

sudo apt-get install python-dev

sudo pip3 install pandas

sudo pip3 install python-rake

sudo pip3 install nltk==3.7

sudo pip3 install kafka-python

pip3 install pytest

sudo apt install -y npm