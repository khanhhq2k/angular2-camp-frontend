export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'https://',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_mail?: string
  ) {}
}

//20, 'NUS company', 'https://porfolio.khanh.com', 'Angular2 + RoR', 120, 50, 3, 'client@yopmail.com'