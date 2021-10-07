function validateRequest(input) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  if (!input.hasOwnProperty('method') || !methods.includes(input.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!input.hasOwnProperty('uri') || !/^[A-Za-z0-9.]+$/g.test(input.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  if (!input.hasOwnProperty('version') || !versions.includes(input.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!input.hasOwnProperty('message')) {
    throw new Error('Invalid request header: Invalid Message');
  }

  if (/[<>&'"\\]/g.test(input.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return input;
}