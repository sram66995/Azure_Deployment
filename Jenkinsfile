pipeline {
    agent any

    stages {

        stage('Test Credentials') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {

                    sh '''
                    echo "Username is $USER"

                    echo $PASS | docker login -u $USER --password-stdin
                    '''
                }
            }
        }
    }
}
