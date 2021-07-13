import { v4, V4Options, NIL, parse, stringify, validate } from 'uuid';

class GUIDHelper {
    public static CreateGUID = (): any => {
        return v4();
    };

    /*
    public static ToString = (bytes: Uint8Array[16]): String => {
        const t = GUIDHelper.newGuidFromArray(bytes);
        return stringify(t);
    }
    */

    public static ToBytes = (guidString: string): ArrayBuffer => {
        const bytes = parse(guidString);
        var rc = new Uint8Array(bytes).buffer;
        return (rc)
    }

    public static EmtpyGUID = (): String => {
        return NIL;
    }

    /*
    public static newGuidFromArray = (bytes: Uint8Array[16]): any => {
        const options: V4Options = { random: bytes };
        return v4(options);
    }
    */

    public static validate = (guidString: string): boolean => {
        return validate(guidString);
    }

}

export default GUIDHelper;