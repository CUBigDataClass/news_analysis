###########################################
#                                         #
#  run zookerper server and kafka server  #
#                                         #
###########################################
if [ "$PWD" = "/" ]; then
	sudo kafka_2.13-2.7.0/bin/zookeeper-server-start.sh kafka_2.13-2.7.0/config/zookeeper.properties & disown
	sudo kafka_2.13-2.7.0/bin/kafka-server-start.sh kafka_2.13-2.7.0/config/server.properties & disown
else
	sudo $(pwd)/kafka_2.13-2.7.0/bin/zookeeper-server-start.sh $(pwd)/kafka_2.13-2.7.0/config/zookeeper.properties & disown
	sudo $(pwd)/kafka_2.13-2.7.0/bin/kafka-server-start.sh $(pwd)/kafka_2.13-2.7.0/config/server.properties & disown
fi
