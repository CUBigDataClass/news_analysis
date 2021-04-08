from kafka import KafkaProducer

TOPIC_NAME ='quickstart-events'
KAFKA_SERVER='kafka.c.petabytepeddler.internal:9092'
producer = KafkaProducer(bootstrap_servers=KAFKA_SERVER)
producer.send(TOPIC_NAME, b'Test Message!!!')
producer.flush()
