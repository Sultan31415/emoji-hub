# Use a slim OpenJDK 17 image
FROM openjdk:17-alpine

# Create and switch to /app
WORKDIR /app

# Copy your built JAR in (the wildcard picks up backend-*.jar)
COPY target/backend-*.jar app.jar

# Tell Docker that the container listens on 8080
EXPOSE 8080

# When the container starts, run:
ENTRYPOINT ["java","-jar","/app.jar"]
