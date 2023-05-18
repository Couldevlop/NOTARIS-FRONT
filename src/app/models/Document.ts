export class Document {
  id?: number;
  docName?: String;
  docType?: String;
  data?: Blob;

  public Documents(docName: string, docType: string, data: Blob) {
    this.docName = docName;
    this.docType = docType;
    this.data = data;
  }
}
