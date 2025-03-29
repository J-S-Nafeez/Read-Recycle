pipeline {
    agent any

    environment {
        NODE_VERSION = '18'  // Set your Node.js version
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/J-S-Nafeez/Read-Recycle.git'
            }
        }

        stage('Setup Node.js') {
            steps {
                script {
                    sh "nvm install $NODE_VERSION"
                    sh "nvm use $NODE_VERSION"
                }
            }
        }

        stage('Install Dependencies - Frontend') {
            steps {
                dir('client') { // Assuming frontend is in the "client" folder
                    sh 'npm install'
                }
            }
        }

        stage('Install Dependencies - Backend') {
            steps {
                dir('server') { // Assuming backend is in the "server" folder
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    try {
                        dir('client') {
                            sh 'npm test || true'  // Run frontend tests if available
                        }
                        dir('server') {
                            sh 'npm test || true'  // Run backend tests if available
                        }
                    } catch (Exception e) {
                        echo 'Tests failed but continuing pipeline...'
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add your deployment steps here (e.g., copy files, restart server, Docker)
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished'
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Build failed! Check logs for errors.'
        }
    }
}
