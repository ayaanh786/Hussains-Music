import type * as Kit from '@sveltejs/kit';

type RouteParams = {  }
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureParentData<T> = T extends null | undefined ? {} : T;
type PageParentData = EnsureParentData<LayoutData>;
type LayoutParams = RouteParams & { slug?: string }
type LayoutServerParentData = EnsureParentData<{}>;
type LayoutParentData = EnsureParentData<{}>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Omit<PageParentData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.js').load>>>;
export type LayoutServerLoad<OutputData extends Partial<App.PageData> & Record<string, any> | void = Partial<App.PageData> & Record<string, any> | void> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Omit<LayoutParentData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>;