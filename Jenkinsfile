pipeline {
    agent any

    tools {
        nodejs 'node'
    }
    
    triggers {
        // Runs at 2 AM every night
        cron('0 2 * * *')
    }

    environment {
        // Decryption passphrase from Jenkins Credentials Store
        ENV_PASS = credentials('OPENCART_GPG_KEY')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Decrypt & Install') {
            steps {
                // Decrypt the .env file
                sh "gpg --batch --yes --decrypt --passphrase $ENV_PASS --output .env .env.gpg"
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        
        stage('Execution') {
            steps {
                // Run tests with 4 shards for speed
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            allure includeProperties: false, results: [[path: 'allure-results']]
            // Retain failing videos/screenshots
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
    }
}