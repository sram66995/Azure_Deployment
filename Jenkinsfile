pipeline {
    agent any

    environment {
        IMAGE_TAG = "latest"
        DOCKER_USER = "sanjayram"
    }

    stages {

stage('Docker Login Test') {
    steps {
        sh '''
        docker login -u sanjayram -p Sanhema12.
        '''
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
