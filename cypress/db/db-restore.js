import { exec } from 'child_process';

const host = Cypress.env('CYPRESS_DB_HOST');
const dbUser = Cypress.env('CYPRESS_DB_USER');
const dbPassword = Cypress.env('CYPRESS_DB_PASSWORD');
const dbName = Cypress.env('CYPRESS_DB_NAME');
const sqlBackupFile = Cypress.env('CYPRESS_DB_BACKUP_FILE');

const command = `mysql -h ${host} -u ${dbUser} -p'${dbPassword}' --max_allowed_packet=256M -D ${dbName} --force < cypress/assets/db-backup/${sqlBackupFile}`;

exec(command, (error, stdout, stderr) => {
    if (typeof error !== 'undefined') {
        console.error(`Error: ${stderr}`);
    } else {
        console.log(`DB Restore successful!`);
        console.log(`FULL LOG: \n ${stdout}`);
    }
});
