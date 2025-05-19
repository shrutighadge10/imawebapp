# Stage 1: Build the Spring Boot app
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

# Copy only the source code inside demo folder
COPY demo /app

# Build the project and skip tests
RUN mvn clean package -DskipTests

# Stage 2: Run the built JAR
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /demo/target/*.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
