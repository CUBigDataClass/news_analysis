git clone https://github.com/CUBigDataClass/news_analysis.git

cd news_analysis

docker run docker/compose:1.29.1 up

echo alias docker-compose="'"'docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:$PWD" \
    -w="$PWD" \
    docker/compose:1.29.1'"'" >> ~/.bashrc

source ~/.bashrc

docker-compose build

docker-compose up