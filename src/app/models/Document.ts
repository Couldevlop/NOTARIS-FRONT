export class Document {
  id?: number;
  docName?: string;
  docType?: string;
  data?: Blob;
  Document(id: number, docName?: string, docType?: string, data?: Blob) {
    this.id = id;
    this.data = data;
    this.docName = docName;
    this.docType = docName;
    this.data = data;
  }
}
