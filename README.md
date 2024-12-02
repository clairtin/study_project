git clone <URL_вашего_репозитория>
cd study_project  //развертка локально

настройка серверной части
cd server
npm install
touch .env
в этот файл - UNSPLASH_ACCESS_KEY = ваш ключ
PORT=5000
npm start

настройка клиентской части 
cd ../ client
npm install
npm start


npm run build