interface GraphData {
    name : string;
    nav : {
      month : NavData;
      qtd : NavData;
      ytd : NavData;
    }
  }
  
  interface NavData {
    otherinfo : string;
    slides : SlideData[];
  }
  
  interface SlideData {
    title : string;
    data : any;
    options?: any;  //options
  }
  
  export enum GraphTypes {
    BASETABLE,
    MULTIPLEROWS,
    HELLONEARTH
  }
  
  export default GraphData;
  