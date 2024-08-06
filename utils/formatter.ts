export const dataFormatter = <T, R>(items: T[], formatFn: (item: T) => R) => {
    return items?.map((item) => formatFn(item))
}