pipeline {
    agent any

    stages {
        stage('Clonando Repositorio Git') {
            steps {
                git branch: 'main', url: 'https://github.com/AlineTex/TesteUi.git'
            }
        }
        stage('Instalando Dependências') {
            steps {
                sh 'npm install'
            }
        }
        stage('Executando os testes do Cypress') {
            steps {
                sh 'npm run cy:run'
            }
        }
    }
}
