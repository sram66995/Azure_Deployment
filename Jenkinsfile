pipeline {
    agent any

    environment {
        IMAGE_TAG = "latest"
    }

            stage('Docker Login') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
        
                        sh '''
                        echo $PASS | docker login -u $USER --password-stdin
                        '''
        
                        env.DOCKER_USER = USER
                    }
                }
            }
        }

        stage('Frontend') {
            steps {
                sh '''
                cd frontend

                docker build -t $DOCKER_USER/frontend:$IMAGE_TAG .
                docker push $DOCKER_USER/frontend:$IMAGE_TAG

                docker stop frontend || true
                docker rm frontend || true

                docker run -d --name frontend -p 3000:3000 $DOCKER_USER/frontend:$IMAGE_TAG
                '''
            }
        }

        stage('API Gateway') {
            steps {
                sh '''
                cd api-gateway

                docker build -t $DOCKER_USER/api-gateway:$IMAGE_TAG .
                docker push $DOCKER_USER/api-gateway:$IMAGE_TAG

                docker stop gateway || true
                docker rm gateway || true

                docker run -d --name gateway -p 5000:5000 $DOCKER_USER/api-gateway:$IMAGE_TAG
                '''
            }
        }

        stage('Auth Service') {
            steps {
                sh '''
                cd auth-service

                docker build -t $DOCKER_USER/auth-service:$IMAGE_TAG .
                docker push $DOCKER_USER/auth-service:$IMAGE_TAG

                docker stop auth || true
                docker rm auth || true

                docker run -d --name auth -p 5003:5003 $DOCKER_USER/auth-service:$IMAGE_TAG
                '''
            }
        }

        stage('Order Service') {
            steps {
                sh '''
                cd order-service

                docker build -t $DOCKER_USER/order-service:$IMAGE_TAG .
                docker push $DOCKER_USER/order-service:$IMAGE_TAG

                docker stop order || true
                docker rm order || true

                docker run -d --name order -p 5001:5001 $DOCKER_USER/order-service:$IMAGE_TAG
                '''
            }
        }

        stage('Payment Service') {
            steps {
                sh '''
                cd payment-service

                docker build -t $DOCKER_USER/payment-service:$IMAGE_TAG .
                docker push $DOCKER_USER/payment-service:$IMAGE_TAG

                docker stop payment || true
                docker rm payment || true

                docker run -d --name payment -p 5002:5002 $DOCKER_USER/payment-service:$IMAGE_TAG
                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh '''
                docker system prune -f
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
