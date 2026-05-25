pipeline {
    agent any

    environment {
        ACR_NAME = "zomoto.azurecr.io"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('ACR Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: '36d759aa-e190-4d9e-b3a6-2f7a64590355',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {

                    sh '''
                    echo $PASS | docker login $ACR_NAME -u $USER --password-stdin
                    '''
                }
            }
        }

        stage('Frontend') {
            steps {
                sh '''
                cd frontend

                docker build -t $ACR_NAME/frontend:$IMAGE_TAG .
                docker push $ACR_NAME/frontend:$IMAGE_TAG

                docker stop frontend || true
                docker rm frontend || true
				
                '''
            }
        }

        stage('Auth Service') {
            steps {
                sh '''
                cd auth-service

                docker build -t $ACR_NAME/auth-service:$IMAGE_TAG .
                docker push $ACR_NAME/auth-service:$IMAGE_TAG

                docker stop auth || true
                docker rm auth || true

                '''
            }
        }

        stage('Order Service') {
            steps {
                sh '''
                cd order-service

                docker build -t $ACR_NAME/order-service:$IMAGE_TAG .
                docker push $ACR_NAME/order-service:$IMAGE_TAG

                docker stop order || true
                docker rm order || true

                '''
            }
        }

        stage('Payment Service') {
            steps {
                sh '''
                cd payment-service

                docker build -t $ACR_NAME/payment-service:$IMAGE_TAG .
                docker push $ACR_NAME/payment-service:$IMAGE_TAG

                docker stop payment || true
                docker rm payment || true

                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh '''
                docker system prune -af
                '''
            }
        }
    }

    post {
        success {
            echo "✅ ACR CI/CD Pipeline SUCCESS"
        }
        failure {
            echo "❌ ACR CI/CD Pipeline FAILED"
        }
    }
}