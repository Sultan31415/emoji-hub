# Use a lightweight Java 17 image
FROM eclipse-temurin:17-jdk-alpine

# Create app directory
WORKDIR /app

# Copy the JAR we just built into the container
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java","-jar","app.jar"]
