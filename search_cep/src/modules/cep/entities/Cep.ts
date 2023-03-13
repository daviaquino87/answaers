interface ICepProps {
  cep: string;
  state: string;
  city: string;
}

export class Cep {
  private props: ICepProps;

  constructor(props: ICepProps) {
    this.props = {
      ...props,
    };
  }

  public set cep(cep: string) {
    this.props.cep = cep;
  }

  public get cep(): string {
    return this.props.cep;
  }

  public set state(state: string) {
    this.props.state = state;
  }

  public get state(): string {
    return this.props.state;
  }

  public set city(city: string) {
    this.props.city = city;
  }

  public get city(): string {
    return this.props.city;
  }
}
