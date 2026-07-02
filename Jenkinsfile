pipeline {
    agent any
    environment {
        SONAR_HOME = tool "sonar"
    }

    stages {
        stage("Code") {
            steps {
                echo "Fetching source code..."
                git url: "https://github.com/punammanna/MYResume.git", branch: "main"
            }
        }
        
        stage("SonarQube Analysis") {
            steps {
                withSonarQubeEnv("sonar") {
                    sh "${SONAR_HOME}/bin/sonar-scanner -Dsonar.projectName=wanderlust -Dsonar.projectKey=my-resume"
                }
            }
        }

        stage("Build") {
            steps {
                echo "Building Docker image..."
                sh "docker build -t my-resume:latest ."
            }
        }

        stage("Push to Docker Hub") {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerLogin',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh """
                        echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
                        docker tag my-resume:latest ${DOCKER_USERNAME}/my-resume:latest
                        docker push ${DOCKER_USERNAME}/my-resume:latest
                    """
                }
            }
        }

        stage("Run") {
            steps {
                echo "Running Docker container..."
                sh "docker rm -f my-resume-test || true"
                sh "docker run -d --name my-resume-test -p 8000:80 my-resume:latest"
            }
        }

        stage("Deploy") {
            steps {
                echo "Deploying application..."
                // Add deployment steps here
            }
        }
    }
}