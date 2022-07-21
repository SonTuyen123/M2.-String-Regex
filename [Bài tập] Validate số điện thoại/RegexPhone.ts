export class RegexPhone {
    private PHONE_REGEX: RegExp =
        /^[(][84||03||07||08||05]{2,2}[)][-][(][0-9]{8}[)]$/;
        
    public Validate_PHONE(regex: string): boolean {
        return this.PHONE_REGEX.test(regex);
    }
}