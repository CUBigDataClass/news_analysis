from kafka import KafkaConsumer

TOPIC_NAME = 'quickstart-events'
KAFKA_SERVER='kafka.c.petabytepeddler:9092'
consumer = KafkaConsumer(TOPIC_NAME, bootstrap_servers=KAFKA_SERVER)
#consumer = KafkaConsumer(TOPIC_NAME)
for message in consumer:
	print(message)
