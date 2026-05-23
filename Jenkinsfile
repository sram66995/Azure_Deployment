pipeline {
    agent any

    environment {
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    '''
                }
            }
        }

        stage('Frontend') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    cd frontend

                    docker build -t $USER/frontend:$IMAGE_TAG .
                    docker push $USER/frontend:$IMAGE_TAG

                    docker stop frontend || true
                    docker rm frontend || true

                    docker run -d --name frontend -p 3000:3000 $USER/frontend:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('API Gateway') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    cd api-gateway

                    docker build -t $USER/api-gateway:$IMAGE_TAG .
                    docker push $USER/api-gateway:$IMAGE_TAG

                    docker stop gateway || true
                    docker rm gateway || true

                    docker run -d --name gateway -p 5000:5000 $USER/api-gateway:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Auth Service') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    cd auth-service

                    docker build -t $USER/auth-service:$IMAGE_TAG .
                    docker push $USER/auth-service:$IMAGE_TAG

                    docker stop auth || true
                    docker rm auth || true

                    docker run -d --name auth -p 5003:5003 $USER/auth-service:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Order Service') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    cd order-service

                    docker build -t $USER/order-service:$IMAGE_TAG .
                    docker push $USER/order-service:$IMAGE_TAG

                    docker stop order || true
                    docker rm order || true

                    docker run -d --name order -p 5001:5001 $USER/order-service:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Payment Service') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    cd payment-service

                    docker build -t $USER/payment-service:$IMAGE_TAG .
                    docker push $USER/payment-service:$IMAGE_TAG

                    docker stop payment || true
                    docker rm payment || true

                    docker run -d --name payment -p 5002:5002 $USER/payment-service:$IMAGE_TAG
                    '''
                }
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
