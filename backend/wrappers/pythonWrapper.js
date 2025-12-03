export function pythonWrapper(userCode, funcName, parameters) {
  return `
${userCode}

def __run_test__():
    import sys, json

    raw = sys.stdin.read().strip()
    parts = raw.split()

    parsed = []
    for p in parts:
        try:
            parsed.append(json.loads(p))
        except:
            parsed.append(p)

    result = ${funcName}(*parsed)

    try:
        print(json.dumps(result))
    except:
        print(result)

__run_test__()
`;
}
