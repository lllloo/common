import { validate, validateAt } from '../src/common/yupValidate';
import * as yup from 'yup';

const yupSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    hasSub: yup.boolean().required(),
    sub: yup.object().when('hasSub', ([value], schema) => {
        return value === true
            ? schema.shape({
                name: yup.string().required(),
                email: yup.string().required(),
            })
            : schema.nullable();
    }),
    hasSubArr: yup.boolean().required(),
    subArr: yup.array().when('hasSubArr', ([value], schema) => {
        return value === true
            ? yup
                .array()
                .of(
                    yup.object({
                        name: yup.string().required(),
                        email: yup.string().required(),
                    })
                )
                .min(1)
                .required()
            : schema.nullable();
    }),
    regex: yup.string().required().matches(/^[a-zA-Z ]+$/g)
});

describe('測試驗證 schema', () => {
    test('測試驗證 pass', () => {
        var data = {
            name: 'test',
            email: 'test@gmail.com',
            hasSub: false,
            hasSubArr: false,
            regex: 'test regex'
        }
        validate(yupSchema, data).then((res) => {
            expect(res).toEqual(data);
        })
    });
    test('測試驗證 error', () => {
        var data = {
            name: '',
            email: 'test@gmail.com',
            hasSub: false,
            hasSubArr: false,
            regex: 'test regex'
        }
        validate(yupSchema, data).catch((res) => {
            expect(res).toHaveLength(1)
            expect(res).toContainEqual(
                expect.objectContaining({
                    path: 'name',
                }),
            );
            expect(res).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        path: 'name',
                    })
                ])
            )
        })
    });
});

describe('測試單個驗證 schema', () => {
    test('測試驗證 pass', () => {
        var data = {
            name: 'test',
            email: 'test@gmail.com',
            hasSub: false,
            hasSubArr: false,
        }
        validateAt(yupSchema, data, 'name').then((res) => {
            expect(res).toEqual(data.name);
        })
    });
    test('測試驗證 error', () => {
        var data = {
            name: '',
            email: 'test@gmail.com',
            hasSub: false,
            hasSubArr: false,
        }
        validateAt(yupSchema, data, 'name').catch((res) => {
            expect(res).toEqual(
                expect.objectContaining({
                    path: 'name',
                })
            )
        })
    });
});