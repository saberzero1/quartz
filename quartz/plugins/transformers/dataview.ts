//import { Component } from "obsidian"
import { VFile } from "vfile"
import { DataviewApi, getAPI } from "obsidian-dataview"
import { QuartzTransformerPlugin } from "../types"
import { FindAndReplaceTuple, findAndReplace } from "mdast-util-find-and-replace"
import {
    FilePath,
    slugifyFilePath,
  } from "../../util/path"

  interface Options {
    enableDataview: boolean
  }
  
  const defaultOptions: Options = {
    enableDataview: true,
  }

export const Dataview: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
    const opts = { ...defaultOptions, ...userOpts }
    return {
        name: "Dataview",
        markdownPlugins() {
            return [() => {
                return async (tree, file) => {
                    const dvApi = getAPI();
            
                    //if (!dvApi) return;
                    const dataViewRegex: FindAndReplaceTuple = [/```dataview\s(.+)```/gms, function($0) { return compileDataview($0, dvApi, file) }];
                    findAndReplace(tree, dataViewRegex)
                    /*const dataviewJsPrefix = dvApi.settings.dataviewJsKeyword;
                    const dataViewJsRegex = "/```" + escapeRegExp(dataviewJsPrefix) + "\\s(.+?)```/"
                    findAndReplace(tree, ["```" + dataViewJsRegex + "\\s(.+?)```"], (_value: string, ...capture: string[]) => {
                        for (const queryBlock of [capture]) {
                            try {
                                const block = queryBlock[0];
                                const query = queryBlock[1];
                
                                const div = createEl("div");
                                const component = new Component();
                                component.load();
                                await dvApi.executeJs(query, div, component, file.path);
                                let counter = 0;
                
                                while (!div.querySelector("[data-tag-name]") && counter < 100) {
                                    await delay(5);
                                    counter++;
                                }
                
                                return {
                                    type: 'dataview',
                                    children: [{ type: 'text', value: queryBlock[0] }]
                                }
                            } catch (e) {
                                console.log(e);
                
                                new Notice(
                                    "Unable to render dataviewjs query. Please update the dataview plugin to the latest version.",
                                );
                
                                return {
                                    type: 'dataview',
                                    children: [{ type: 'text', value: queryBlock[0] }]
                                }
                            }
                        }

                        return {
                            type: "emphasis",
                            children: [{ type: 'text', value: inner }]
                        }
                    })
                    const inlineQueryPrefix = dvApi.settings.inlineQueryPrefix;
                    const inlineDataViewRegex = "/`" + escapeRegExp(inlineQueryPrefix) + "(.+?)`/"
                    findAndReplace(tree, [inlineDataViewRegex], (_value: string, ...capture: string[]) => {
                        for (const inlineQuery of [capture]) {
                            try {
                                const code = inlineQuery[0];
                                const query = inlineQuery[1];
                
                                const dataviewResult = dvApi.tryEvaluate(query.trim(), {
                                    this: dvApi.page(file.path) ?? {},
                                });
                
                                if (dataviewResult) {
                                    replacedText = replacedText.replace(
                                        code,
                                        dataviewResult.toString() ?? "",
                                    );
                                }
                            } catch (e) {
                                console.error(e);
                
                                new Notice(
                                    "Unable to render inline dataview query. Please update the dataview plugin to the latest version.",
                                );
                
                                return inlineQuery[0];
                            }
                        }
                    })
                    const inlineJsQueryPrefix = dvApi.settings.inlineJsQueryPrefix;
                    const inlineJsDataViewRegex = "/`" + escapeRegExp(inlineJsQueryPrefix) + "(.+?)`/"
                    findAndReplace(tree, [inlineJsDataViewRegex], (_value: string, ...capture: string[]) => {
                        // inner is the text inside of the () of the regex
                        const [inner] = capture

                        for (const inlineJsQuery of inlineJsMatches) {
                            try {
                                const code = inlineJsQuery[0];
                                const query = inlineJsQuery[1];
                
                                let result: string | undefined | null = "";
                
                                result = tryDVEvaluate(query, file, dvApi);
                
                                if (!result) {
                                    result = tryEval(query);
                                }
                
                                if (!result) {
                                    result = await tryExecuteJs(query, file, dvApi);
                                }
                
                                return {
                                    type: 'dataview',
                                    children: [{ type: 'text', value: result }]
                                }
                            } catch (e) {
                                console.error(e);
                
                                new Notice(
                                    "Unable to render inline dataviewjs query. Please update the dataview plugin to the latest version.",
                                );
                
                                return {
                                    type: 'dataview',
                                    children: [{ type: 'text', value: inlineJsQuery[0] }]
                                }
                            }
                        }
                    })*/
                    
                    //const text = file.text
                    //let replacedText = text;
                    //const dataViewRegex = /```dataview\s(.+?)```/gms;
                    //const dvApi = getAPI();
            
                    //if (!dvApi) return replacedText;
                    //const matches = text.matchAll(dataViewRegex);
            
                    //const dataviewJsPrefix = dvApi.settings.dataviewJsKeyword;
            
                    /*const dataViewJsRegex = new RegExp(
                        "```" + escapeRegExp(dataviewJsPrefix) + "\\s(.+?)```",
                        "gsm",
                    );*/
                    //const dataviewJsMatches = text.matchAll(dataViewJsRegex);
            
                    //const inlineQueryPrefix = dvApi.settings.inlineQueryPrefix;
            
                    /*const inlineDataViewRegex = new RegExp(
                        "`" + escapeRegExp(inlineQueryPrefix) + "(.+?)`",
                        "gsm",
                    );*/
                    //const inlineMatches = text.matchAll(inlineDataViewRegex);
            
                    //const inlineJsQueryPrefix = dvApi.settings.inlineJsQueryPrefix;
            
                    /*const inlineJsDataViewRegex = new RegExp(
                        "`" + escapeRegExp(inlineJsQueryPrefix) + "(.+?)`",
                        "gsm",
                    );*/
                    /*const inlineJsMatches = text.matchAll(inlineJsDataViewRegex);
            
                    if (
                        !matches &&
                        !inlineMatches &&
                        !dataviewJsMatches &&
                        !inlineJsMatches
                    ) {
                        return text;
                    }*/
            
                    //Code block queries
                    /*for (const queryBlock of matches) {
                        try {
                            const block = queryBlock[0];
                            const query = queryBlock[1];
            
                            const { isInsideCallout, finalQuery } =
                                sanitizeQuery(query);
            
                            let markdown = await dvApi.tryQueryMarkdown(
                                finalQuery,
                                file.getPath(),
                            );
            
                            if (isInsideCallout) {
                                markdown = surroundWithCalloutBlock(markdown);
                            }
            
                            replacedText = replacedText.replace(block, `${markdown}`);
                        } catch (e) {
                            console.log(e);
            
                            new Notice(
                                "Unable to render dataview query. Please update the dataview plugin to the latest version.",
                            );
            
                            return queryBlock[0];
                        }
                    }*/
            
                    /*for (const queryBlock of dataviewJsMatches) {
                        try {
                            const block = queryBlock[0];
                            const query = queryBlock[1];
            
                            const div = createEl("div");
                            const component = new Component();
                            component.load();
                            await dvApi.executeJs(query, div, component, file.getPath());
                            let counter = 0;
            
                            while (!div.querySelector("[data-tag-name]") && counter < 100) {
                                await delay(5);
                                counter++;
                            }
            
                            replacedText = replacedText.replace(block, div.innerHTML ?? "");
                        } catch (e) {
                            console.log(e);
            
                            new Notice(
                                "Unable to render dataviewjs query. Please update the dataview plugin to the latest version.",
                            );
            
                            return queryBlock[0];
                        }
                    }*/
            
                    //Inline queries
                    /*for (const inlineQuery of inlineMatches) {
                        try {
                            const code = inlineQuery[0];
                            const query = inlineQuery[1];
            
                            const dataviewResult = dvApi.tryEvaluate(query.trim(), {
                                this: dvApi.page(file.getPath()) ?? {},
                            });
            
                            if (dataviewResult) {
                                replacedText = replacedText.replace(
                                    code,
                                    dataviewResult.toString() ?? "",
                                );
                            }
                        } catch (e) {
                            console.error(e);
            
                            new Notice(
                                "Unable to render inline dataview query. Please update the dataview plugin to the latest version.",
                            );
            
                            return inlineQuery[0];
                        }
                    }*/
            
                    /*for (const inlineJsQuery of inlineJsMatches) {
                        try {
                            const code = inlineJsQuery[0];
                            const query = inlineJsQuery[1];
            
                            let result: string | undefined | null = "";
            
                            result = tryDVEvaluate(query, file, dvApi);
            
                            if (!result) {
                                result = tryEval(query);
                            }
            
                            if (!result) {
                                result = await tryExecuteJs(query, file, dvApi);
                            }
            
                            replacedText = replacedText.replace(
                                code,
                                result ?? "Unable to render query",
                            );
                        } catch (e) {
                            console.error(e);
            
                            new Notice(
                                "Unable to render inline dataviewjs query. Please update the dataview plugin to the latest version.",
                            );
            
                            return inlineJsQuery[0];
                        }
                    }*/
            
                    //return replacedText;
                }
            }]
        },
    }

    function compileDataview(input: string[], dvApi: DataviewApi, file: VFile) {
        for (const queryBlock of input) {
            //try {
                const block = queryBlock[0];
                const query = queryBlock[1];

                const { isInsideCallout, finalQuery } =
                    sanitizeQuery(query);

                let markdown = dvApi.queryMarkdown(
                    finalQuery,
                    file.path,
                );

                if (isInsideCallout) {
                    markdown = surroundWithCalloutBlock(markdown);
                }

                return markdown

                /*return {
                    type: 'dataview',
                    children: [{ type: 'text', value: markdown }]
                }*/
            /*} catch (e) {
                console.error(e);*/

                /*new Notice(
                    "Unable to render dataview query. Please update the dataview plugin to the latest version.",
                );*/

                /*return {
                    type: 'dataview',
                    children: [{ type: 'text', value: queryBlock[0] }]
                }
            }*/
        }
    }

    function escapeRegExp(string: string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
    }

	

	/**
	 * Splits input in lines.
	 * Prepends the callout/quote sign to each line,
	 * returns all the lines as a single string
	 *
	 */
	function surroundWithCalloutBlock(input: string): string {
		const tmp = input.split("\n");

		return " " + tmp.join("\n> ");
	}

	/**
	 * Checks if a query is inside a callout block.
	 * Removes the callout symbols and re-join sanitized parts.
	 * Also returns the boolean that indicates if the query was inside a callout.
	 * @param query
	 * @returns
	 */
	function sanitizeQuery(query: string): {
		isInsideCallout: boolean;
		finalQuery: string;
	} {
		let isInsideCallout = false;
		const parts = query.split("\n");
		const sanitized = [];

		for (const part of parts) {
			if (part.startsWith(">")) {
				isInsideCallout = true;
				sanitized.push(part.substring(1).trim());
			} else {
				sanitized.push(part);
			}
		}
		let finalQuery = query;

		if (isInsideCallout) {
			finalQuery = sanitized.join("\n");
		}

		return { isInsideCallout, finalQuery };
	}
}

function tryDVEvaluate(
	query: string,
	filePath: FilePath,
	dvApi: DataviewApi,
): string | undefined | null {
	let result = "";

	try {
		const dataviewResult = dvApi.tryEvaluate(query.trim(), {
			this: dvApi.page(slugifyFilePath(filePath, false)) ?? {},
		});
		result = dataviewResult?.toString() ?? "";
	} catch (e) {
		console.error(e);
	}

	return result;
}

function tryEval(query: string) {
	let result = "";

	try {
		result = (0, eval)("const dv = DataviewAPI;" + query); //https://esbuild.github.io/content-types/#direct-eval
	} catch (e) {
		console.warn("eval did not yield any result", e);
	}

	return result;
}

/*async function tryExecuteJs(
	query: string,
	filePath: FilePath,
	dvApi: DataviewApi,
) {
	const div = createEl("div");
	const component = new Component();
	component.load();
	await dvApi.executeJs(query, div, component, slugifyFilePath(filePath, false));
	let counter = 0;

	while (!div.querySelector("[data-tag-name]") && counter < 50) {
		await delay(5);
		counter++;
	}

	return div.innerHTML;
}*/

//delay async function
function delay(milliseconds: number) {
	return new Promise((resolve, _) => {
		setTimeout(resolve, milliseconds);
	});
}