pipeline {
    agent any

    stages {

        stage('Test Credentials') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'bb35d0b7-af75-4a5e-81f5-8732a2082f3d',
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
