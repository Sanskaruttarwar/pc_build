export interface cpus{
    name : string;
    price : number;
    core_count : number;
    core_clock: number;
    boost_clock: number;
    graphics : string;
  }
export interface memory{
    name : string;
    price : number;
    speed : number;
    modules: number;
    color: string;
    cas_latency : number;
  }
export interface externalharddrive{
    name : string;
    price : number;
    type : number;
    capacity: number;
    color: string;
    interface : string;
  }
export interface motherboard{
    name : string;
    price : number;
    socket : number;
    max_memory: number;
    memory_slots: number;
    form_factor : string;
    color: string;
  }
export interface powersupply{
  name : string;
  price : number;
  type : string;
  efficiency: number;
  color: string;
  wattage: number;
  }
export interface Case{
  name : string;
  price : number;
  type : string;
  side_panel: string;
  color: string;
  external_volume: number;
  }
export interface casefan{
  name : string;
  price : number;
  size : number;
  rpm: string;
  color: string;
  airflow: string;
  }
export interface cpucooler{
  name : string;
  price : number;
  rpm : string;
  noise_level: number;
  color: string;
  size: number;
  }
  
 