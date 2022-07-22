export class RegexPhone {
    private PHONE_REGEX: RegExp = /^\([0-9]{2,2}\)-\([0-9]{8}\)$/;

    public Validate_PHONE(regex: string): boolean {
        return this.PHONE_REGEX.test(regex);
    }
}