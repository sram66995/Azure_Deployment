pipeline {
    agent any

    environment {
        IMAGE_TAG = "latest"
        DOCKER_USER = "sanjayram"
    }

    stages {

 stage('Test Credentials') {
    steps {
        script {
            echo "Checking credential..."
            withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'U', passwordVariable: 'P')]) {
                sh 'echo "SUCCESS: $U"'
            }
        }
    }
}

    }

    post {
        success {
            echo "✅ CI/CD Pipeline SUCCESS"
        }
        failure {
            echo "❌ CI/CD Pipeline FAILED"
        }
    }
}
