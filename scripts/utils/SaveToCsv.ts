import fs, {writeFileSync} from 'fs';
import path from 'path';

export class SaveToCsv {
  /**
   * Create path's directory if it doesn't exist
   * and write data to the path's file
   */
  static writeFileSyncRestoreFolder(
    filePath: fs.PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options?: fs.WriteFileOptions,
  ): void {
    const dir = path.dirname(filePath.toString());
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, data, options);
  }

  static save(pathOut: string, items: {title: string, obj: object}[]) {

    // collect all properties of the items
    const keys: Set<string> = new Set<string>();
    for (const item of items) {
      Object.keys(item.obj).forEach(key => keys.add(key));
    }
    const headers = [""];
    for (const item of items) {
      headers.push(item.title);
    }

    const rows: string[][] = [];
    keys.forEach(function(key: string) {
      const row = [];
      row.push(key);

      for (const item of items) {
        row.push(Object(item.obj)[key]);
      }
      rows.push(row);
    });

    this.writeFileSyncRestoreFolder(pathOut, headers.join(';') + '\n', { encoding: 'utf8', flag: 'w'});
    for (let i = 0; i < rows.length; ++i) {
      const row = rows[i];
      writeFileSync(
        pathOut,
        row.join(';') + '\n',
        { encoding: 'utf8', flag: 'a' },
      );
    }
  }
}