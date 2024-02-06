import { Injectable, } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Filesystem } from '@capacitor/filesystem';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection  } from '@capacitor-community/sqlite';

const dbName = 'baseBeta';
const databaseDirectory = '../../../src/data/protoDB.sql';

@Injectable({
  providedIn: 'root'
})

export class ConectionDBService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db: SQLiteDBConnection;

  constructor() { }

  async openDatabase() {
    // Verificar si la base de datos ya está abierta
    if (this.db) {
      console.warn('La conexión ya está abierta');
      return;
    }

    // Obtener la ruta del directorio de la base de datos
    const databasePath = Capacitor.convertFileSrc(databaseDirectory);

    const dbData = await Filesystem.readFile({
      path: 'data/protoDB.sql',
    });

    // Verificar si el archivo de la base de datos existe
    const statResult  = await Filesystem.stat({ path: databasePath });
    if (!statResult || statResult.type !== 'file') {
      throw new Error('El archivo de la base de datos no se encuentra en el directorio especificado.');
    }

    this.db = await this.sqlite.createConnection(dbName, false, 'no-encryption', 1, false);
    await this.db.open();

    console.log("entro");
  }

  async executeQuery(query: string, params: any[] = []) {
    try {
      // Verificar si la base de datos está abierta
      if (!this.db) {
        throw new Error('La conexión a la base de datos no está abierta');
      }

      // Ejecutar la consulta SQL
      const result = await this.db.query(query, params);
      return result;
    } catch(error) {
      console.error('Error al ejecutar la consulta SQL:', error);
      throw error;
    }
  }

  async closeDatabase() {
    try {
      if (this.db) {
        await CapacitorSQLite.close({ database: dbName });
        console.log('Conexión cerrada con éxito');
      } else {
        console.warn('La conexión no está abierta');
      }
    } catch(error) {
      console.error('Error al cerrar la base de datos:', error);
    }
  }
}


