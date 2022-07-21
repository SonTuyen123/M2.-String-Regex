export class RexgexStudent{
    private STUDENT_REGEX: RegExp = /^[CAP][0-9]{4,4}[GHIKLM]$/;
    
    public Validate(regex: string): boolean {
        return this.STUDENT_REGEX.test(regex);
    }
}