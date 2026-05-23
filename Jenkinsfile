pipeline {
    agent any

    stages {

        stage('Frontend') {
            steps {
                sh '''
                cd frontend
                docker build -t frontend .
                docker stop frontend || true
                docker rm frontend || true
                docker run -d --name frontend -p 3000:3000 frontend
                '''
            }
        }

        stage('API Gateway') {
            steps {
                sh '''
                cd api-gateway
                docker build -t api-gateway .
                docker stop gateway || true
                docker rm gateway || true
                docker run -d --name gateway -p 5000:5000 api-gateway
                '''
            }
        }

        stage('Auth Service') {
            steps {
                sh '''
                cd auth-service
                docker build -t auth-service .
                docker stop auth || true
                docker rm auth || true
                docker run -d --name auth -p 5003:5003 auth-service
                '''
            }
        }

        stage('Order Service') {
            steps {
                sh '''
                cd order-service
                docker build -t order-service .
                docker stop order || true
                docker rm order || true
                docker run -d --name order -p 5001:5001 order-service
                '''
            }
        }

        stage('Payment Service') {
            steps {
                sh '''
                cd payment-service
                docker build -t payment-service .
                docker stop payment || true
                docker rm payment || true
                docker run -d --name payment -p 5002:5002 payment-service
                '''
            }
        }
    }

    post {
        success {
            echo "Build and Deployment SUCCESS"
        }
        failure {
            echo "Build FAILED"
        }
    }
}